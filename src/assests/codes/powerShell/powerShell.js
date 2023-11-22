const codes = {
    create_folder_App: "mkdir folder_name",
    remove_directory: ["rmdir /s folder_name","attrib -hs *"],
    create_file: "type nul > file_name.extension",
    remove_file: "del file_name.extension",
    remove_all_file_in_directory: "del *",
    get_all_directory: "dir",
    get_content_file: "more file_name.extension ",
    curl_html: "curl https://harmash.com/ ",
    POST_requests_using_curl: `curl --request POST --data "username=johndoe&password=secret" https://www.example.com/login `,
    Copy_all_file_with_some_extension_to_another_folder: `for %F in (C:\\xampp\\htdocs\\js\\js\\*.php) do copy "%F" "C:\\Users\\SURFACE BOOK\\Desktop\\all_course_dj_env\\project\\templates\\js"`,
    change_extension_php_to_extension_html: `cd "C:\your\folder\path"
for %i in (*.php) do ren "%i" "*.html"`,
    print_all_file_in_some_folder: `Get-ChildItem | Where-Object { -not $_.PSIsContainer } | ForEach-Object { $_.Name }`
}



export default codes;