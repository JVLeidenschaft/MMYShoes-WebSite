<?php

// Form gönderildiğinde
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Veritabanı bağlantısı
    $servername = "sql211.infinityfree.com"; // Sunucu adı
    $username = "if0_34889497"; // Kullanıcı adı
    $password = "4fGT7DrgBeu"; // Şifre
    $dbname = "if0_34889497_contact"; // Veritabanı adı

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Veritabanına bağlantı sağlanamadı: " . $conn->connect_error);
    }

    // Form verilerini al ve temizle
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $mail = mysqli_real_escape_string($conn, $_POST['mail']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);

    // Veriyi veritabanına ekle
    $sql = "INSERT INTO contact_info (name, mail, phone) VALUES ('$name', '$mail', '$phone')";

    if ($conn->query($sql) === TRUE) {
        echo "Veri başarıyla eklendi.";
    } else {
        echo "Hata: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

?>

