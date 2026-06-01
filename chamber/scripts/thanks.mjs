const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#thanks').innerHTML = `
<p>Thank you for join ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
<p>We saved your email ${myInfo.get('email')}</p>
<p>And your phone number ${myInfo.get('phone')} </p>
<p>${myInfo.get('organization')} has successfully joined</p>
<p>Your plan is: ${myInfo.get('membership')}</p>
<br>
<p>We hope we see you soon AWA</p>
`;