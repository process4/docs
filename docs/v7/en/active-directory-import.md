AD Import extension allow to import users, groups and computers from the Active Directory to the modeler as an objects. To Import data from Active Directory user need to start the AD Import extension.

![AD imp1](//images.ctfassets.net/utx1h0gfm1om/18pJKXqcNfLNbToYhOVk27/ed2da494548861061b2eeb8d4b61b183/AD_imp1.jfif)

To start Active Directory Import select corresponding item from the Extensions drop-down menu. In the opened Active Directory Import window user has to create new set for import or edit existing one so already imported data has to be updated.

 

<div class="info">
  During the updating of existing sets of importing data new objects created in the Active Directory will be imported to the modeler, but deleted from
the Active Directory objects will not be deleted from the modeler.
</div>


__Active Directiory settings__

After that the set of the importing data has to be defined. For each type of data has to be established the unit and class where the data will be imported. It is possible to select already existing class or to create new one.

 
![AD imp2](//images.ctfassets.net/utx1h0gfm1om/6bAj7I3kwkzkcq0afswPxd/b640b6416c2bc00580e0387e036226db/AD_imp2.jfif)

If some type of data should not be imported then uncheck “Do import” checkbox for this specific type.

In the AD Tree Selector user can specify which users, groups and computers should be imported from the Active Directory.

![AD imp3](//images.ctfassets.net/utx1h0gfm1om/1ISmxf2JY5bHal19IypKQn/4a13de4a51173a396f3cec17da03fbd9/AD_imp3.jfif)

When the Import will be finished in the repository in the corresponding class will be created list of objects imported from the Active Directory. Available properties of this objects will imported too such as e-mail, phone number, address and other.
