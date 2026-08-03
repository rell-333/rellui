// src/audio-player.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { tv } from "tailwind-variants"
import { Card } from "./card"
import { Button } from "./button"

const timeText = tv({ base: "text-xs text-charcoal/40 tabular-nums" })
const iconBtn = tv({
    base: "flex shrink-0 items-center justify-center text-charcoal/40 outline-none transition-colors hover:text-charcoal data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-2 data-[focus-visible]:outline-accent",
})
const popover = tv({
    base: "absolute bottom-full mb-3 flex items-center justify-center rounded-full border border-sand bg-cream p-2 shadow-lg",
})

type CSSPropertiesWithVars = React.CSSProperties & {
    "--fill-percent"?: string
}

function formatTime(seconds: number) {
    if (!seconds || isNaN(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
}

export interface AudioPlayerProps {
    src: string
    filename?: string
    className?: string
}

export function AudioPlayer({ src, filename, className }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const volumeWrapperRef = useRef<HTMLDivElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(80)
    const [isMuted, setIsMuted] = useState(false)
    const [showVolume, setShowVolume] = useState(false)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const updateTime = () => setCurrentTime(audio.currentTime)
        const updateDuration = () => setDuration(audio.duration || 0)
        const handleEnded = () => setIsPlaying(false)

        audio.addEventListener("timeupdate", updateTime)
        audio.addEventListener("loadedmetadata", updateDuration)
        audio.addEventListener("ended", handleEnded)

        return () => {
            audio.removeEventListener("timeupdate", updateTime)
            audio.removeEventListener("loadedmetadata", updateDuration)
            audio.removeEventListener("ended", handleEnded)
        }
    }, [])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume / 100
        }
    }, [volume, isMuted])

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (volumeWrapperRef.current && !volumeWrapperRef.current.contains(e.target as Node)) {
                setShowVolume(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    function togglePlay() {
        const audio = audioRef.current
        if (!audio) return
        if (isPlaying) {
            audio.pause()
        } else {
            void audio.play()
        }
        setIsPlaying(!isPlaying)
    }

    function handleScrub(e: React.ChangeEvent<HTMLInputElement>) {
        const audio = audioRef.current
        if (!audio) return
        const newTime = Number(e.target.value)
        audio.currentTime = newTime
        setCurrentTime(newTime)
    }

    const scrubPercent = duration ? (currentTime / duration) * 100 : 0
    const volumePercent = isMuted ? 0 : volume

    return (
        <Card className={`w-full max-w-lg p-5 pt-8 ${className ?? ""}`}>
            <audio ref={audioRef} src={src} preload="metadata" />

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <input
                        type="range"
                        min={0}
                        max={duration || 100}
                        step={1}
                        value={currentTime}
                        onChange={handleScrub}
                        aria-label="Seek"
                        className="rellui-audio-range"
                        style={{ "--fill-percent": `${scrubPercent}%` } as CSSPropertiesWithVars}
                    />
                    <div className="flex justify-between">
                        <span className={timeText()}>{formatTime(currentTime)}</span>
                        <span className={timeText()}>{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex w-6 shrink-0 justify-center">
                        <a
                        href={src}
                        download={filename}
                        aria-label="Download"
                        className={iconBtn()}
                        >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path d="M12 3v12" strokeLinecap="round" />
                            <path d="m7 11 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 21h14" strokeLinecap="round" />
                        </svg>
                    </a>
                </div>

                <div className="flex flex-1 justify-center">
                    <Button
                        variant="primary"
                        onPress={togglePlay}
                        aria-label={isPlaying ? "Pause" : "Play"}
                        className="!size-11 !rounded-full !p-0"
                    >
                        {isPlaying ? (
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="ml-0.5">
                                <path d="M6 4l14 8-14 8V4z" />
                            </svg>
                        )}
                    </Button>
                </div>

                <div ref={volumeWrapperRef} className="relative flex w-6 shrink-0 justify-center">
                    {showVolume && (
                        <div className={popover()}>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                step={1}
                                value={volumePercent}
                                onChange={(e) => {
                                    const newVolume = Number(e.target.value)
                                    setVolume(newVolume)
                                    if (newVolume > 0) setIsMuted(false)
                                }}
                                aria-label="Volume"
                                className="rellui-audio-range rellui-audio-range--vertical"
                                style={{ "--fill-percent": `${volumePercent}%` } as CSSPropertiesWithVars}
                            />
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={() => setShowVolume(!showVolume)}
                        aria-label="Volume"
                        className={iconBtn()}
                    >
                        {isMuted || volume === 0 ? (
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path d="M11 5 6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="m17 9 4 6M21 9l-4 6" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path d="M11 5 6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.5 8.5a5 5 0 0 1 0 7" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
</Card>
)
}