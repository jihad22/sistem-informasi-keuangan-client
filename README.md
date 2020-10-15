Apache SSI
  kita gunakan untuk memanggil komponen penyusun Page dengan melakukan settingan melalui .htaccess

  settingan .htaccess :
    Options +Includes
    AddType text/html .html
    AddOutputFilter INCLUDES .html
  
  contoh pemanggilan file:
  <body>
    <!--#include file="./header.html" -->
      Content
    <!--#include file="./footer.html" -->
  </body>