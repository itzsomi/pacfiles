function FindProxyForURL(url, host)
{
	if (isInNet(host, "192.168.128.242", "255.255.255.255")||(isInNet(host, "192.168.128.240", "255.255.255.255")||isInNet(dnsResolve(host),"127.0.0.0","255.0.0.0"))) return "DIRECT";

  return "PROXY 192.168.128.241:3128";
}
