**Question:** Are Active Directory 2016 features available in
process4biz?

 

**Answer:** Modeler version 7.0.0 build 32161 (and later versions as
well) supports main Active Directory 2016 features. AD-import extension
can import users, groups and computers from AD (with a few properties,
mostly for users - like "SID", "Description", "E-mail", etc.). It worked
fine with previous version of AD and works fine with the current one.
Other new AD-features do **not** relate to our extension - because these
features are time synchronization through domain infrastructure,
Microsoft Passport authentication, time-bound group membership and some
improvements in File Replication Service.

Modeler version 7.0.1 and later versions support AD 2016 features as
well.