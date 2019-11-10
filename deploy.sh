
echo "Check ability to create a kubernetes deployment in ${NAMESPACE} using kubectl CLI"
kubectl auth can-i create deployment --namespace ${NAMESPACE}

kubectl config set-context --current --namespace=$NAMESPACE

# Execute the file
echo "KUBERNETES DEPLOYMENT COMMAND:"
echo "kubectl apply -f deployment.yaml" -n $NAMESPACE
kubectl apply -f deployment.yaml -n $NAMESPACE

echo "DEPLOYED PODS:"
kubectl get pods  -n $NAMESPACE

# Execute the file
echo "KUBERNETES SERVICE COMMAND:"
echo "kubectl apply -f service.yaml" -n $NAMESPACE
kubectl apply -f service.yaml  -n $NAMESPACE

echo "DEPLOYED SERVICES:"
kubectl get services -n $NAMESPACE


# Execute the file
echo "KUBERNETES INGRESS COMMAND:"
echo "kubectl apply -f ingress.yaml" -n $NAMESPACE
kubectl apply -f ingress.yaml -n $NAMESPACE

echo "DEPLOYED ingress:"
kubectl get ingress -n $NAMESPACE
echo ""