import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'organisations'
})
export class Organisation extends JsonApiModel {

  @Attribute()
  name: string;

}
