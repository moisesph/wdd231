const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#thanks').innerHTML = `
<p>Thank you for join <font color="#155650">${myInfo.get('fname')} ${myInfo.get('lname')}</font></p>
<p>We saved your email <font color="#1f7396">${myInfo.get('email')}</font></p>
<p>And your phone number <font color="#1f7396">${myInfo.get('phone')}</font> </p>
<p><font color="#1f7396">${myInfo.get('organization')}</font> has successfully joined</p>
<p>Your plan is: <font color="#1f7396">${myInfo.get('membership')}</font></p>
<br>
<p>We hope we see you soon AWA!!</p>

<img src="images/thanks.jfif" alt="thanks image" id="thanks-image">
`;