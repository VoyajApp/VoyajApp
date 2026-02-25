from django.shortcuts import render

def login(request):
    """
    Takes a username and password in POST body and sets a cookie if the credentials are correct.
    """
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Here you would typically check the username and password against your user database
        if username == 'admin' and password == 'password':  # Example credentials
            response = render(request, 'login_success.html')
            response.set_cookie('auth_token', 'your_auth_token_here')  # Set a cookie for authentication
            return response
        else:
            return render(request, 'login_failed.html', {'error': 'Invalid credentials'})

    return render(request, 'login.html')