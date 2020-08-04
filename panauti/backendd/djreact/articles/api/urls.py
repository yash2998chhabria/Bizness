from .views import ArticleView,ProductListView,StallListView,StallDetailView
from django.urls import path,include


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', ArticleView, basename='userviewset')
urlpatterns = router.urls

urlpatterns = [
    path('stall',StallListView.as_view(),name='stalls'),
    path('<int:stall_name>/products',ProductListView.as_view(),name='products'),
    path('stall/<pk>',StallDetailView.as_view(),name='stalldetail')
    
]
urlpatterns += router.urls