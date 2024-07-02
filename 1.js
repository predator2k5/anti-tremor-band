// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Anime.js animations
    anime({
        targets: '.neon-button',
        scale: [1, 1.1],
        duration: 1000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
    });

    anime({
        targets: '.glowing-text',
        opacity: [0.5, 1],
        duration: 1500,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });

    // Sign In / Sign Up form toggle
    const showSignup = document.getElementById('show-signup');
    const showSignin = document.getElementById('show-signin');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');

    if (showSignup && showSignin && signinForm && signupForm) {
        showSignup.addEventListener('click', (e) => {
            e.preventDefault();
            signinForm.style.display = 'none';
            signupForm.style.display = 'block';
        });

        showSignin.addEventListener('click', (e) => {
            e.preventDefault();
            signupForm.style.display = 'none';
            signinForm.style.display = 'block';
        });
    }

    // Bluetooth device connection simulation
    const scanButton = document.getElementById('scan-button');
    const deviceList = document.getElementById('device-list');
    const connectionStatus = document.getElementById('connection-status');

    if (scanButton && deviceList && connectionStatus) {
        scanButton.addEventListener('click', () => {
            scanButton.disabled = true;
            scanButton.textContent = 'Scanning...';
            
            setTimeout(() => {
                const devices = ['TremorEase Band 1', 'TremorEase Band 2', 'TremorEase Band 3'];
                deviceList.innerHTML = '';
                devices.forEach(device => {
                    const li = document.createElement('li');
                    li.textContent = device;
                    li.addEventListener('click', () => connectDevice(device));
                    deviceList.appendChild(li);
                });
                
                scanButton.disabled = false;
                scanButton.textContent = 'Scan for Devices';
            }, 2000);
        });

        function connectDevice(deviceName) {
            connectionStatus.textContent = `Connecting to ${deviceName}...`;
            setTimeout(() => {
                connectionStatus.textContent = `Connected to ${deviceName}`;
                deviceList.innerHTML = '';
            }, 1500);
        }
    }

    // Form submission handling
    const patientForm = document.getElementById('patient-form');
    if (patientForm) {
        patientForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Patient profile updated successfully!');
        });
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('You have been logged out.');
            window.location.href = 'index.html';
        });
    }
});