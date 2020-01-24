import CustomFormFieldDto from "./form/custom-form-field-dto";

export class CreateEventDto {

    public title: string;
    public description: string;
    public committeeId: number;

    public startDate: Date;
    public endDate: Date;
    public signupBefore: Date;

    public memberOnly: boolean;
    public memberPrice: number;
    public notMemberPrice: number;

    public active: boolean;

    public fields: CustomFormFieldDto[];
}