const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    localStorage.clear();
    document.location.replace('/login');
  } else {
    document.location.replace('/');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
