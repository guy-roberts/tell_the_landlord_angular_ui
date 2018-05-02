import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'reports'
})
export class Report extends JsonApiModel {

  @Attribute()
  category: string;

  @Attribute()
  description: string;

  @Attribute()
  latitude: number;

  @Attribute()
  longitude: number;

}
