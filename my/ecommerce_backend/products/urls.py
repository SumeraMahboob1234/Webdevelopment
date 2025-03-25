from django.urls import path
from .views import ProductListCreate, ProductDetail

urlpatterns = [
    path('', ProductListCreate.as_view(), name="product-list"),
    path('<int:pk>/', ProductDetail.as_view(), name="product-detail"),
]
