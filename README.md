# ga-test

### First go at learning Git - todos:

- [x] basic workflow commands - add, commit, push
- [x] use auth token to log in
- [x] remove a file from the repo using CLI
- [x] view repo in CLI (git ls-files)
- [x] view git changelog in CLI
- [ ] understand github structure (will I ever check this off, I wonder)
- [x] learn how to peek at webpage in progress - `html-preview.github.io`
- [x] learn how to use git through vs code

### basic workflow structure
1. make edits to code (use `code <filename>` in CLI)
2. `git add -A` or `git add <filename>`
3. `git commit -m "descriptive text"` - the `-m` flag is to use the message written in this line
4. `git push origin main` or `git push -u origin main` - the `-u` flag is for upstream reference

### other useful commands

- `git help <command>` gives help about that command within git - as `man git` for example is super long and unhelpful
- `git log -p -- <filename>` shows changelog for that file 
    - `--` shows the minimum commits to explain the changes
    - `-p` generates patch text, making edits clearer to read