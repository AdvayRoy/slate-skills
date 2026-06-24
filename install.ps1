$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
node (Join-Path $ScriptDir "bin/install.js") @args
