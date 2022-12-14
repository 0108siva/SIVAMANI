<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="cart.css">

    <link href="https://fonts.googleapis.com/css?
    family=Alfa+Slab+One | Open+Sans" rel="stylesheet">

</head>

<body>
    <header>
        <h1>SMART<span>BAGGY</span></h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="AboutUs.html">AboutUs</a></li>
                <li><a href="index.html"><i class="fa fa-shopping-cart" style="font-size:16px"></i> Add More</a></li>
            </ul>
        </nav>
    </header>

    <table class="table">
        <thead>
            <th>ProductName</th>
            <th>ProductId</th>
            <th>Count</th>
            <th>Price</th>
           
        </thead>

        <tbody id="tbody1">

        </tbody>

        
    </table>



    <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

    <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-database.js"></script>

    <script>
        const firebaseConfig = {
            apiKey: "AIzaSyCiroHdI-n3FpgzXQFdTs5Ina7VK-ftVaE",
            authDomain: "smartybag-a12f2.firebaseapp.com",
            databaseURL: "https://smartybag-a12f2-default-rtdb.firebaseio.com",
            projectId: "smartybag-a12f2",
            storageBucket: "smartybag-a12f2.appspot.com",
            messagingSenderId: "248906064377",
            appId: "1:248906064377:web:39899dfcb94a2ba0a35d28"
        };
        // Initialize Firebase
        var app = firebase.initializeApp(firebaseConfig);
        console.log(app.options);

        function SelectAllData() {
            firebase.database().ref('SmartShoppyUsers/SmartShopyProduct').on('value',
                function (AllRecords) {
                    AllRecords.forEach(
                        function (CurrentRecord) {
                            var ProductName = CurrentRecord.val().ProductName;
                            var ProductId = CurrentRecord.val().ProductId;
                            var Count = CurrentRecord.val().count;
                            var Price = CurrentRecord.val().Price;


                            AddItemsToTable(ProductName, ProductId, Count, Price);

                        }
                    );
                });
        }


        window.onload = SelectAllData;

        function AddItemsToTable(ProductName, ProductId, Count, Price, Button) {

            if (Count > 10) {
                var tbody = document.getElementById('tbody1');
                var trow = document.createElement('tr');

                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                var td4 = document.createElement('td');
               
                
                td1.innerHTML = ProductName;
                td2.innerHTML = ProductId;
                td3.innerHTML = Count;
                td4.innerHTML = Price;
               
                



                trow.appendChild(td1);
                trow.appendChild(td2);
                trow.appendChild(td3);
                trow.appendChild(td4);
                
               

                tbody.appendChild(trow);
            }
            else {
                console.log('No data');
            }

        }


    </script>

</body>

</html>
