import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'profiles'
})
export class Profile extends JsonApiModel {

  @Attribute()
  firstname: string;

  @Attribute()
  lastname: string;

  @Attribute()
  address1: string;

  @Attribute()
  address2: string;

  @Attribute()
  address3: string;

  @Attribute()
  postcode: string;

  @Attribute()
  email: string;

  @Attribute()
  mobile_phone: string;

  @Attribute()
  home_phone: string;

  @Attribute()
  tenant_reference: string;

  @Attribute()
  notes: string;

}
