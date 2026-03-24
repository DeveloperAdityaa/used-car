
		// Keep these keys in sync with DarkModeProvider.tsx
		var userDarkMode = localStorage.getItem("dark-mode") === "true"
		var overrideSystem = localStorage.getItem("dark-mode-override-system") === "true"
		var systemDarkMode = matchMedia("(prefers-color-scheme: dark)").matches
		var isDarkMode = overrideSystem ? userDarkMode : systemDarkMode
		if (isDarkMode) {
			document.body.classList.add("framer-theme-dark")
		}

		// Set release channel as class on body.
		var framerReleaseChannel = window.framerRelease && window.framerRelease.channel
		if (framerReleaseChannel) {
			document.body.classList.add("framer-release-" + framerReleaseChannel)
		}

		// Add a class to the body to indicate that the agent experiment is on and apply the agent theme
		// as the default theme.
		// TODO: Remove once experiment is removed.
		var storageKey = framerReleaseChannel ? "experiments-" + framerReleaseChannel : "experiments"
		try {
			var experiments = JSON.parse(localStorage.getItem(storageKey) || "{}")
			if (experiments.agent === "on") {
				document.body.classList.add("agent")
			}
		} catch (e) {
			// Ignore errors.
		}
	