<?php
    require_once('geoplugin.class.php');
    $geoplugin = new geoPlugin();
    $geoplugin->locate();
    // create a variable for the country code
    $var_country_code = $geoplugin->countryCode;
    // redirect based on country code:
    if ($var_country_code == "BR") {
        header('Location: http://noma.wtf/pt');
    }
    else {
        header('Location: http://noma.wtf/en');
    }
?>
