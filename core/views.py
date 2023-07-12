from core.models import List, Item
from rest_framework import viewsets, authentication
from rest_framework import permissions
from .serializers import ListSerializer, ItemSerializer


class ListViewSet(viewsets.ModelViewSet):
    
    queryset = List.objects.all().order_by()
    serializer_class = ListSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.TokenAuthentication, authentication.SessionAuthentication]

    def get_queryset(self):
        user = self.request.user
        return List.objects.filter(owner=user)
    
class ItemViewSet(viewsets.ModelViewSet):
    
    queryset = Item.objects.all().order_by()
    serializer_class = ItemSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.TokenAuthentication,  authentication.SessionAuthentication]