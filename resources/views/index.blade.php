<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
    @viteReactRefresh
    @vite('resources/js/app.js')
    <title>Laravel</title>

    </style>
</head>
<body style="background:#2d3436;" class="text-white">
<div id="app"></div>
</body>
</html>
