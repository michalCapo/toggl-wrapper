# toggl-wrapper

This is just a wrapper around https://toggl.com/app/ build with https://electronjs.org/. Nothing more and nothing less.

# Features
- for windows
- for linux
- for macOS (not tested)
- lives in system tray
- hides on close
- global shortcut `Super+R` opens and close window

# Libraries
- electron (3.0 beta)
- electron builder
- electron packager
- inkscape (for converting svg to png)

# Commands
- `yarn start`: run app in development mode
- `yarn build`: build packages for windows and linux (use electron packager)
- `yarn dist`: build packages for your platform (use electron builder)
