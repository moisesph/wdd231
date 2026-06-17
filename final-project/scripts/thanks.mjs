const myInfo = new URLSearchParams(window.location.search);

console.log(myInfo);

document.querySelector('#thanks').innerHTML = `
<p>Thank you for join <font color="#155650">${myInfo.get('fname')} ${myInfo.get('lname')}</font></p>
<p>We saved your email <font color="#1f7396">${myInfo.get('email')}</font></p>
<p>And your phone number <font color="#1f7396">${myInfo.get('phone')}</font> </p>
<p>You contacted us for : <font color="#1f7396">${myInfo.get('membership')}</font></p>
<p>We will contact you as soon as possible!</p>
<p>You asked an appointment on: <font color="#1f7396">${myInfo.get('date')}</font></p>
<p>Hour: <font color="#1f7396">${myInfo.get('hour')}</font></p>
<br>
<p>We hope we see you soon <font color="#155650">${myInfo.get('fname')}</font></p> AWA!!</p>

<img src="images/thanks.webp" alt="thanks image" id="thanks-image">
`;