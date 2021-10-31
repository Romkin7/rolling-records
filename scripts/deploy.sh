
ssh -i ~/.ssh/rr-ec2.pem ec2-user@ec2-18-192-197-36.eu-central-1.compute.amazonaws.com << 'ENDSSH'
sudo yum update -y
cd rolling-records
git checkout .
git pull origin main
npm ci
pm2 restart all
ENDSSH
