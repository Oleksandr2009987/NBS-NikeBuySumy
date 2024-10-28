document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращает отправку формы по умолчанию

    const rating = document.querySelector('input[name="rating"]:checked');
    const review = this.review.value;

    if (rating) {
        // Здесь можно обработать рейтинг и отзыв, например, сохранить их или отправить на сервер
        console.log('Рейтинг:', rating.value);
        console.log('Відгук:', review);
        // Очистить форму после отправки
        this.reset();
    } else {
        alert('Будь ласка, виберіть рейтинг.');
    }
});
<script>
    document.getElementById('submitReview').addEventListener('click', function() {
        // Получаем текст отзыва
        var reviewText = document.getElementById('reviewText').value;
        
        // Проверяем, что текст не пустой
        if (reviewText.trim() !== '') {
            // Показываем сообщение о том, что отзыв отправлен
            document.getElementById('thankYouMessage').style.display = 'block';
            document.getElementById('reviewText').value = ''; // Очистка текстового поля
        } else {
            alert('Будь ласка, введіть ваш відгук.'); // Предупреждение о пустом отзыве
        }
    });
</script>