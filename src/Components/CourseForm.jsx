import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

function CourseForm({ formData }) {
/*function CourseForm({ title,vendor, location,startdate, enddate, notes }) {*/

   
    return (
        <div className="Course-form">
            <h3>Course Information</h3>

            <div class="TableBackground">
                <table class="TableBackground">                   
                    <tbody>
                        <tr>
                            <td>
                                Course Title:
                            </td>
                            <td>
                                <InputText id="tbCourseTitle"
                                           value={formData.title} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vendor:
                            </td>
                            <td>
                                <InputText  id="tbVendor" value={formData.vendor} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Location:
                            </td>
                            <td>
                                <InputText  id="tbLocation" value={formData.location} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Start Date:
                            </td>
                            <td>
                                <InputText  id="tbStartDate" value={formData.startdate} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                End Date:
                            </td>
                            <td>
                                <InputText  id="tbEndDate" value={formData.enddate} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Request Notes:
                            </td>
                            <td>
                                <InputTextarea
                                    id="taCourseNotes"
                                    aria-label="minimum height"
                                    minRows={3}                                  
                                    value={formData.notes}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>  
            </div>
        </div>
    );

};

export default CourseForm;

