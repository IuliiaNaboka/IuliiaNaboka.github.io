document.getElementById('feedback-form').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    evt.preventDefault();
    http.open("POST", "contacts.php", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText + ', Your message has been received.\nOur specialists will contact you');
            f.messageFF.removeAttribute('value');
            f.messageFF.value='';
        }
    }
    http.onerror = function() {
        alert('Your message failed');
    }
}, false);
