If diagrams are located in SP  then on diagram save we check each of
that diagram shapes if class of that shape object are enabled for
synchronization under diagram sync rule and have __SP AutoBind__ of
__ShareData__ enabled and collect all such shapes. If we have such shape,
then we execute SP Synchronization and then update that shape shapedata
to store a binding to element in SP list where that object is stored in
SP. So this shape will actual link to SP list element.
