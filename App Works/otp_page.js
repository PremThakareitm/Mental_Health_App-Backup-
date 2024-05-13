// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.otp-inputs input');
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if(e.key >= 0 && e.key <= 9) {
                inputs[index].value = ''; // Clear current input
                if(index < inputs.length - 1) {
                    inputs[index + 1].focus(); // Move to next input
                }
            } else if(e.key === 'Backspace') {
                if(index > 0) {
                    inputs[index - 1].focus(); // Move to previous input
                }
            }
        });
    });

    document.querySelector('.otp-button').addEventListener('click', () => {
        let otp = '';
        inputs.forEach(input => otp += input.value);
        alert(`Entered OTP is: ${otp}`);
        // Here you would add your code to verify the OTP
    });
});
