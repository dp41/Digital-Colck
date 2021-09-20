
                function showTime() {
                    var date = new Date();
                    var hours = date.getHours();
                    var minutes = date.getMinutes();
                    var seconds = date.getSeconds();
                    var session = "AM";

                    var today = new Date();
                    var dd = String(today.getDate()).padStart(2,"0");
                    var mm = String(today.getMonth() + 1).padStart(2,"0");
                    var yyyy = today.getFullYear();


                    if(hours === 0){
                        hours = 12; //12 hours format
                    }

                    if(hours > 12){
                        hours = hours - 12; //12 hour format
                        session = "PM";
                    }

                    hours = (hours < 10) ?"0"+hours:hours;
                    minutes = (minutes < 10) ?"0"+minutes:minutes;
                    seconds = (seconds < 10) ?"0"+seconds:seconds;

                    today = dd+ "-" + mm + "-" + yyyy;
                    // document.write(today);
                    document.getElementById("digitalClock").innerHTML = today +"<br>"+ hours + ":" + minutes + ":" + seconds +" "+ session;

                    setTimeout((showTime),1000);
                }
                showTime();