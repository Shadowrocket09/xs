
var body = $response.body
    .replace(/"vip":"\d"/g, '"vip":"0"');
$done({
    body
});