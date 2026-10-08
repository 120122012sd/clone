document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    let mode = 'light';
    const profilePicture = document.getElementById('profile-picture');
    const chat = document.getElementById('chat');
    const call = document.getElementById('call');
    const community = document.getElementById('community');

    modeToggle.addEventListener('click', () => {
        mode = mode === 'light' ? 'dark' : 'light';
        modeToggle.classList.toggle('light');
        modeToggle.classList.toggle('dark');
        modeToggle.classList.toggle('custom');
        document.body.style.backgroundColor = mode === 'light' ? '#f5f5f5' : '#343434';
        profilePicture.style.backgroundColor = mode === 'light' ? '#fff' : '#007bff';
        chat.style.backgroundColor = mode === 'light' ? '#fff' : '#e0e0e0';
        call.style.backgroundColor = mode === 'light' ? '#e0e0e0' : '#d0d0d0';
        community.style.backgroundColor = mode === 'light' ? '#d0d0d0' : '#e0e0e0';
    });

    // Call and text functionality
    const callButton = document.createElement('button');
    callButton.textContent = 'Call';
    call.appendChild(callButton);

    const textButton = document.createElement('button');
    textButton.textContent = 'Text';
    call.appendChild(textButton);

    // Community functionality
    const communityButton = document.createElement('button');
    communityButton.textContent = 'Create Community';
    community.appendChild(communityButton);

    // Profile picture
    profilePicture.style.backgroundColor = '#fff';
    profilePicture.style.width = '50px';
    profilePicture.style.height = '50px';
    profilePicture.style.borderRadius = '50%';
    profilePicture.style.marginRight = '10px';
})