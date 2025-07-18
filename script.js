        // Event Button
        const eventButton = document.getElementById('eventButton');
        let clickCount = 0;
        eventButton.addEventListener('click', () => {
            document.getElementById('clickMessage').textContent = `Button clicked ${++clickCount} times!`;
        });

        eventButton.addEventListener('mouseenter', () => {
            document.getElementById('hoverStatus').textContent = "You are hovering over the button!";
        });
        eventButton.addEventListener('mouseleave', () => {
            document.getElementById('hoverStatus').textContent = "Hover over the button.";
        });

        document.addEventListener('keydown', (event) => {
            document.getElementById('pressKey').textContent = `Key pressed: "${event.key}"`;
        });

        eventButton.addEventListener('dblclick', () => {
            document.getElementById('secretActionStatus').textContent = "SECRET: SIRI NI NUMBERS. WANTAM....MUST GO !";
        });

        // Interactive Button
        const changeColour = document.getElementById('changeColour');
        let isOriginalState = true;
        changeColour.addEventListener('click', () => {
            if (isOriginalState) {
                changeColour.style.backgroundColor = '#dc3545';
                changeColour.textContent = 'Changed!';
            } else {
                changeColour.style.backgroundColor = '#007bff';
                changeColour.textContent = 'Change Text';
            }
            isOriginalState = !isOriginalState;
        });

        // Image Gallery
        const galleryImage = document.getElementById('galleryImage');
        const images = [
            'https://images.pexels.com/photos/54514/pexels-photo-54514.jpeg',
            'https://images.pexels.com/photos/21939345/pexels-photo-21939345.jpeg',
            'https://images.pexels.com/photos/18551619/pexels-photo-18551619.jpeg',
            'https://images.pexels.com/photos/17849765/pexels-photo-17849765.jpeg'
        ];
        let currentImageIndex = 0;
        document.getElementById('prevImage').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            galleryImage.src = images[currentImageIndex];
        });
        document.getElementById('nextImage').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            galleryImage.src = images[currentImageIndex];
        });

        // Tabs
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabPanes = document.querySelectorAll('.tab-pane');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                button.classList.add('active');
                document.getElementById(button.dataset.tab).classList.add('active');
            });
        });

        // Form Validation
        const form = document.getElementById('myForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');

            let isValid = true;

            if (!username.value.trim()) {
                document.getElementById('usernameError').classList.add('show');
                isValid = false;
            } else {
                document.getElementById('usernameError').classList.remove('show');
            }

            if (!email.value.includes('@')) {
                document.getElementById('emailError').classList.add('show');
                isValid = false;
            } else {
                document.getElementById('emailError').classList.remove('show');
            }

            if (password.value.length < 8) {
                document.getElementById('passwordError').classList.add('show');
                isValid = false;
            } else {
                document.getElementById('passwordError').classList.remove('show');
            }

            if (password.value !== confirmPassword.value) {
                document.getElementById('confirmPasswordError').classList.add('show');
                isValid = false;
            } else {
                document.getElementById('confirmPasswordError').classList.remove('show');
            }

            if (isValid) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Please fix the errors in the form.');
            }
        });
