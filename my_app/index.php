<!-- dummy.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dummy PHP Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            text-align: center;
        }

        h1 {
            color: #007bff;
            margin-top: 0;
        }

        p {
            margin-top: 10px;
            color: #444;
        }

        .welcome-message {
            font-size: 1.2rem;
            margin-top: 20px;
            color: #333;
        }

        .php-code {
            background-color: #f7f7f7;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            margin-top: 20px;
            text-align: left;
        }

        .php-output {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello, Teacher!</h1>
        <p>This is a powerful dummy PHP page to demonstrate adding PHP files to the project.</p>
        <p>You can write PHP code here to perform server-side tasks and interact with your React application.</p>
        <div class="php-code">
            <?php
            // Sample PHP code
            $name = "Teacher";
            echo "<p>Welcome, $name!</p>";
            ?>
        </div>
        <p class="welcome-message">Feel free to explore the possibilities!</p>
    </div>
</body>
</html>
