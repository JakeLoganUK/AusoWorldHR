function leaveTypesCombo(callBack) {
    var cbo = "";
    methodLeaveTypeSYS(null, 4, null, function (dataSet) {
        if (dataSet) {
            $.each(dataSet, function (index, set) {
                cbo += '<option value="' + set.id + '">' + set.leave_type + '</option>';
            });
        } else {
            cbo = "<option value=''>No Data Found</option>";
        }
        $('#leave_type').html(cbo);
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack();
        }
    });
}