# Setup

### 1. Install Git

- Windows: 

	[Git for Windows/x64 Setup](https://git-scm.com/install/windows)

- Ubuntu: 

	```
	sudo apt install git
	```

Check Version

```
git -v
```

---

### 2. Install nvm

- Windows: 

	[nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases)

- Ubuntu: 

	[nvm version](https://github.com/nvm-sh/nvm/releases) (replace `< version >` with `vx.x.x`)

	```
	sudo apt install curl
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/< version >/install.sh | bash
	```

Check Version

```
nvm -v
```

---

### 3. Install Node.js & npm

[Version Released](https://nodejs.org/en/about/previous-releases)

```
nvm install < version >
nvm use < version >
```

Check Version

```
node -v
npm -v
```

---

### 4. Install Dependencies

```
npm install
```

---

### 5. Run

```
npm run dev
```

---