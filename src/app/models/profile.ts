import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'profiles'
})
export class Profile extends JsonApiModel {

  @Attribute()
  first_name: string;

  @Attribute()
  last_name: string;

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
  phone: string;

  @Attribute()
  gender: string;

  @Attribute()
  notes: string;

}
