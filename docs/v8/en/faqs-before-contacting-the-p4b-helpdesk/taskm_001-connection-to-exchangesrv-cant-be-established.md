### TaskManagement Error

The connection cannot be established.

"The response received from the service didn't contain valid XML"

### Troubleshooting

It seems that URL is used to web outlook. However, another URL is
actually required here - URL of exchange web services.

I do not know exactly how to find it - I am not an exchange
administrator and know very little about it (I have not set it up even
once - we use an already configured one for Task Management
implementation). But I can explain how this URL can be found on our
exchange environment, so maybe the same action will lead to the correct
URL on the customer's side.  
This should be the link to **MSExchangeServicesAppPool**. So the base
URL for that service will be based on URL for exchange synch. In our
exchange this app is called EWS. It can be located by
opening **Webserver (IIS)** in Server Manager. There in the tree under
"Default Web Site" the EWS node is located. By opening advance settings,
you will se that it is a virtual path. On our exchanage this app has
"/EWS" virtual path. So, as the URL of our exchange machine
is [contoso.com](http://contoso.com/), the base URL for the exchange
synch will be: <https://contoso.com/EWS>. However, this is not all. On
our exchange environment we should apply **Exchange.asmx** to that base
URL, so the resulting URL will
be <https://contoso.com/EWS/Exchange.asmx>. (You can actually see when
the application of Exchange.asmx is not unreasonable, by looking if
there is such a file - go to the Physical Path location found in Advance
Settings of that MSExchangeServicesAppPool app, where we located the
virtual path). If Exchange.asmx exists there, the it is a correct
addition.

So maybe something like that is the necessary URL for
them: <https://bit-consulting.eu/EWS/Exchange.asmx>
