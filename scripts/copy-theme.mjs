import { copyFileSync, mkdirSync, existsSync } from "node:fs"

if (!existsSync("dist")) mkdirSync("dist")
copyFileSync("src/theme.css", "dist/theme.css")
console.log("copied theme.css to dist/")