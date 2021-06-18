<?php


namespace src;


class CaptureScreenshot
{
    const API_KEY = 'AIzaSyAaCtZRFWtuBXmMSYG10dtBpWr72dT432o';

    /**
     * Capture web screenshot using google api.
     *
     * @param string $url
     * @return array|false|mixed|string|string[]
     */
    public function snap(string $url)
    {
        $key = self::API_KEY;
        //Url value should not empty and validate url
        if (!empty($url) && filter_var($url, FILTER_VALIDATE_URL)) {
            $curl_init = curl_init("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={$url}&key={$key}");
            curl_setopt($curl_init, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($curl_init);
            curl_close($curl_init);
            //call Google PageSpeed Insights API
            //decode json data
            $googlepsdata = json_decode($response, true);

            //screenshot data
            $snap = $googlepsdata['lighthouseResult']['audits']['full-page-screenshot']['details']['screenshot']['data'];

            return $snap;
        } else {
            return false;
        }
    }
}
