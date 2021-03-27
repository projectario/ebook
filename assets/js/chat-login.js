// $(function () {
//     $('.chat-login-page .login-button').click(attemptLogin);

//     function attemptLogin() {

//         io.socket.put('/chat', { username: user.firstName }, function (body, response) {
//             if (err) throw err;

//             if (!body) {
//                 window.location.reload();
//             }

//             io.socket.patch('/user/' + body.id, { online: true }, function (body, response) {

//                 // Handle errors.
//                 if (response.statusCode !== 200) {
//                     alert('An error occurred trying to log you in with that username.  Please try again.');
//                     return;
//                 }

//                 // Reload the page.  Since we're logged in now, the chat page will appear.
//                 window.location.reload();

//             });
//         })


//     }
// })