const changeTheme = (light) => { 
    if (light) {
        document.documentElement.style.setProperty('color-scheme', 'light');
    }
    else { 
        document.documentElement.style.setProperty('color-scheme', 'light dark');
    }
}

export default changeTheme;