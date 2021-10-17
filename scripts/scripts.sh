ssh -i ~/.ssh/rr-ec2.pem ec2-user@ec2-3-70-198-29.eu-central-1.compute.amazonaws.com << 'ENDSSH'
sudo yum update -y
sudo yum -y install gcc make
cd /usr/local/src
sudo wget http://download.redis.io/redis-stable.tar.gz
sudo tar xvzf redis-stable.tar.gz
sudo rm -f redis-stable.tar.gz
cd redis-stable
sudo yum groupinstall "Development Tools"
sudo make distclean
sudo make
sudo yum install -y tcl
sudo make test
sudo cp src/redis-server /usr/local/bin/
sudo cp src/redis-cli /usr/local/bin/
redis-server
redis-cli
ENDSSH
