"use client"

import { useState, type ReactNode } from "react"
import {
    DropZone as AriaDropZone,
    FileTrigger,
    Button as AriaButton,
    type FileDropItem,
} from "react-aria-components"
import { tv } from "tailwind-variants"

type Variant = "image" | "audio" | "default"

const zone = tv({
    base: "relative flex min-h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-sand bg-sand/10 p-6 text-center outline-none transition-colors data-[focus-visible]:border-accent data-[drop-target]:border-accent data-[drop-target]:bg-accent/5",
})

const hintStyle = tv({ base: "text-xs text-charcoal/50" })
const fileNameStyle = tv({ base: "max-w-full truncate text-xs font-medium text-charcoal" })
const errorStyle = tv({ base: "text-xs text-clay" })
const browseBtn = tv({ base: "text-xs font-semibold text-accent underline outline-none" })

const clearBtn = tv({
    base: "absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal/60 text-white outline-none transition-colors data-[hovered]:bg-charcoal/80",
})

const ICONS: Record<Variant, ReactNode> = {
    image: (
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-charcoal/30">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={1.5} />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    audio: (
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-charcoal/30">
            <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth={1.5} />
            <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth={1.5} />
        </svg>
    ),
    default: (
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-charcoal/30">
            <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
            <path d="M14 2v5h5" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
        </svg>
    ),
}

const DEFAULT_ACCEPT: Record<Variant, string[] | undefined> = {
    image: ["image/*"],
    audio: ["audio/*"],
    default: undefined,
}

const DEFAULT_HINT: Record<Variant, string> = {
    image: "PNG, JPG, or GIF — click or drag to upload",
    audio: "MP3, WAV, or FLAC — click or drag to upload",
    default: "Click or drag a file to upload",
}

export interface FileUploadProps {
    variant?: Variant
    acceptedFileTypes?: string[]
    validate?: (file: File) => string | null | Promise<string | null>
    hint?: string
    className?: string
    onFileSelect: (file: File | null) => void
}

export function FileUpload({
                               variant = "default",
                               acceptedFileTypes,
                               validate,
                               hint,
                               className,
                               onFileSelect,
                           }: FileUploadProps) {
    const [fileName, setFileName] = useState<string | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const accept = acceptedFileTypes ?? DEFAULT_ACCEPT[variant]

    async function acceptFile(file: File) {
        setError(null)

        const validationError = await validate?.(file)
        if (validationError) {
            setError(validationError)
            return
        }

        if (preview) URL.revokeObjectURL(preview)
        setFileName(file.name)
        setPreview(variant === "image" ? URL.createObjectURL(file) : null)
        onFileSelect(file)
    }

    function clear() {
        if (preview) URL.revokeObjectURL(preview)
        setPreview(null)
        setFileName(null)
        setError(null)
        onFileSelect(null)
    }

    return (
        <div className="flex flex-col gap-1">
            <AriaDropZone
                className={zone({ className })}
                getDropOperation={(types) =>
                    !accept || accept.some((t) => types.has(t.replace("/*", "/"))) ? "copy" : "cancel"
                }
                onDrop={async (e) => {
                    const item = e.items.find((i): i is FileDropItem => i.kind === "file")
                    if (item) acceptFile(await item.getFile())
                }}
            >
                {fileName && (
                    <button type="button" onClick={clear} className={clearBtn({})} aria-label="Remove file">
                        ✕
                    </button>
                )}

                {preview ? (
                    <img src={preview} alt="preview" className="h-24 w-24 rounded-xl object-cover" />
                ) : (
                    ICONS[variant]
                )}

                {fileName && !preview && <p className={fileNameStyle({})}>{fileName}</p>}

                <FileTrigger
                    acceptedFileTypes={accept}
                    onSelect={(files) => {
                        const file = files?.[0]
                        if (file) acceptFile(file)
                    }}
                >
                    <AriaButton className={browseBtn({})}>
                        {fileName ? "Choose a different file" : "Click to browse"}
                    </AriaButton>
                </FileTrigger>

                <p className={hintStyle({})}>{hint ?? DEFAULT_HINT[variant]}</p>
            </AriaDropZone>

            {error && <p className={errorStyle({})}>{error}</p>}
        </div>
    )
}