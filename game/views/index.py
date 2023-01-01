from django.shortcuts import render

def index(request):
    return render(request, "multiends/web.html")# 默认路径就是 templates