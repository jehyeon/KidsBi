from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from rest_framework_swagger.views import get_swagger_view

import video.api

app_name = 'video'

router = routers.DefaultRouter()
router.register('videos', video.api.VideoViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/doc', get_swagger_view(title='Rest API Document')),
    url(r'^api/v1/', include((router.urls, 'video'), namespace='api')),
]