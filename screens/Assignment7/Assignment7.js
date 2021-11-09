import React from 'react';
import { View } from 'react-native';
import Calculator from 'react-native-scientific-calculator';

const ApAssignment7 = () => {
    return (
        <View style={{flex: 1}}>
            <Calculator
                showLiveResult={true} 
                scientific={true}
                theme="dark"
                customize={{
                    borderRadius: 5,
                    spacing: 2
                }}
            />
        </View>
    )
}

export default ApAssignment7;