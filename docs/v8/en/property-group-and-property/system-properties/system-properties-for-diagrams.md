Complements the list of [system properties](system-properties).

The following system properties are available for [diagrams](diagram),
here divided according to [property group](property-group-and-property):

### Definition

#### Class

Here you can specify to which [diagram class](class) a diagram should
belong.

#### Template Name

This system property shows the name of
the [template](shapes-stencils-and-templates), which is used for the
diagram. The property is read-only and is automatically updated when
saving a diagram.

In [Diagram Update Wizard](diagram-update), you can use a filter
according to this property and select all diagrams that use the
currently selected template.

### Approval Management

Optionally available when the [approval
management](approval-management) has been activated.

#### Authorisation Status

Shows the authorisation status of each diagram.

#### Date of change of Authorisation Status

Shows the date of the most recent authorisation change.

#### Authorisation or Deletion Date

Optionally available; shows the date of the last authorisation or
deletion.

#### Expiration date of Authorisation

Optionally available; shows the expiration date of the authorisation
status.

#### Authorisation Comment

Optionally available; enables comments during the authorisation process.

#### Keep old when not approved

Optionally available; allows already approved objects or diagrams to be
kept in the [web publication](webpublisher), when their status was
changed since the last publication to a non-approved draft status.

### Administration

#### Automatic link

This system property controls the creation of
automatic [links](links) on diagrams. The value "true" or "False" allows
or forbids this.

As a rule, the value for diagrams should be set to "true" to allow
automatic links.


<div class="warning">
 <h3>Caution:</h3>

 Through the [creation of a dependency
diagram](creating-a-dependency-diagram), the system changes this value
to "false".
  </div>