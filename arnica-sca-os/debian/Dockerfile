# Arnica SCA OS test image - Debian 10 OS packages (QA #18003)
FROM debian:10
CMD ["sh", "-c", "cat /etc/os-release; dpkg-query -W -f='${Package} ${Version}\\n'"]
